const API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const BASE = "https://places.googleapis.com/v1";

export async function findBusiness(query: string) {
    if(API_KEY === undefined) throw new Error("Google Maps API key not found!");
    const res = await fetch(`${BASE}/places:searchText`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": API_KEY,
            "X-Goog-FieldMask":
                "places.id,places.displayName,places.formattedAddress",
        },
        body: JSON.stringify({ textQuery: query }),
    });
    if (!res.ok) throw new Error(`searchText ${res.status}: ${await res.text()}`);
    const data = await res.json();
    return data.places?.[0]; // top match
}

export async function getBusinessDetails(placeId: string) {
    if(API_KEY === undefined) throw new Error("Google Maps API key not found!");
    const fields = [
        "regularOpeningHours",
        "rating",
        "userRatingCount",].join(",");

    const res = await fetch(`${BASE}/places/${placeId}`, {
        headers: {
            "X-Goog-Api-Key": API_KEY,
            "X-Goog-FieldMask": fields,
        },
    });
    if (!res.ok) throw new Error(`getPlace ${res.status}: ${await res.text()}`);
    return res.json();
}

interface TimePoint {
    day: number;    // 0 = Sunday, 6 = Saturday
    hour: number;   // 0-23
    minute: number; // 0-59
}

interface Period {
    open: TimePoint;
    close: TimePoint;
}

export function isOpenNow(periods: Period[], timeZone?: string): boolean {
    const toMinutes = (d: number, h: number, m: number): number =>
        d * 1440 + h * 60 + m;

    let day: number;
    let hour: number;
    let minute: number;

    if (timeZone) {
        const parts = new Intl.DateTimeFormat('en-US', {
            timeZone,
            weekday: 'short',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
        }).formatToParts(new Date());

        const dayMap: Record<string, number> = {
            Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
        };

        const weekdayPart = parts.find(p => p.type === 'weekday')?.value ?? 'Sun';

        if(dayMap[weekdayPart] === undefined) {
            throw new Error("Could not find if currently open");
        }

        day = dayMap[weekdayPart];
        hour = parseInt(parts.find(p => p.type === 'hour')?.value ?? '0', 10) % 24;
        minute = parseInt(parts.find(p => p.type === 'minute')?.value ?? '0', 10);
    } else {
        const now = new Date();
        day = now.getDay();
        hour = now.getHours();
        minute = now.getMinutes();
    }

    const nowMinutes = toMinutes(day, hour, minute);
    const WEEK = 7 * 1440;

    return periods.some(({ open, close }) => {
        let start = toMinutes(open.day, open.hour, open.minute);
        let end = toMinutes(close.day, close.hour, close.minute);

        if (end <= start) end += WEEK;

        return (
            (nowMinutes >= start && nowMinutes < end) ||
            (nowMinutes + WEEK >= start && nowMinutes + WEEK < end)
        );
    });
}