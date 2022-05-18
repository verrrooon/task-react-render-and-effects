import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }) {
    const [message, setMessage] = useState(-1);

    const callback = (msg: number) => {
        setMessage(msg);
    };

    useEffect(() => {
        subscribe(props.sourceId, callback);

        const res = () => {
            unsubscribe(props.sourceId, callback);
            setMessage(-1);
        };

        return res;
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {message}
        </div>
    );
}
