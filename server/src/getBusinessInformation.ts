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