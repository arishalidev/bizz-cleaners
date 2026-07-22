import React from 'react';
import Headline from "../../components/Headline.tsx";
import Body from "../../components/Body.tsx";
import frontLobby from "../../assets/frontLobby.jpg"

interface littleThingsMatterProps {

}

const littleThingsMatter: React.FC<littleThingsMatterProps> = ({}) => {
    return (
        <div className={"responsive-py responsive-px limit-size-5xl"}>
            <Headline>The little things still matter</Headline>
            <div className={"flex flex-col gap-2 mt-3 lg:mt-4 max-w-150"}>

            <Body>We've been doing this for a long time, and one thing we've learned is that people remember the details.</Body>

                <Body>A shirt that's ready when you were told it would be. A missing button that's replaced before you
                    notice it. A comforter that comes back fresh and clean. A wedding dress that's handled with extra care.</Body>

                <Body>Those things might seem small, but they're important to us.</Body>

                <Body>Everything is cleaned right here in our store and checked before it goes back to the customer. We
                    take the time to look things over because that's how we'd want our own clothes treated.</Body>

                <Body>We've also tried to make the process as easy as possible. Same-day service, free pickup and
                    delivery, a secure drop-off box, text notifications, and online scheduling are all there to help fit dry cleaning into your week.</Body>
            </div>

            <img src={frontLobby} alt={"Bizz Cleaners front lobby"} className={"mt-4"}/>
        </div>
    );
};

export default littleThingsMatter;