import { useEffect } from "react";

export default function Contacts() {

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('2 seconds')
        }, 2000)

        return () => {
            clearTimeout(timeoutId);
        }
    })

    return (
        <>
            <h2>Contact Page</h2>
            <ul>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title"/> <br />
                <label htmlFor="description">Description</label> <br />
                <textarea name="" id="description" cols="30" rows="10"></textarea> <br />
                <input type="submit" />

                <li>Emil - 0832395433</li>
                <li>Lilit - 089344312</li>
            </ul>
        </>
    );
}