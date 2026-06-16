// This is the IO component:
import React, { useRef } from 'react';

export function DownloadFile({ url, filename } : { url: string, filename: string }) {
    const linkRef = useRef<HTMLAnchorElement>(null);

    const handleDownload = () => {
        if (linkRef.current) {
            linkRef.current.click();
        }
    };

    return (
        <>
            <a ref={linkRef} href={url} download={filename} style={{ display: 'none' }} />
            <button onClick={handleDownload}>
                Download {filename}
            </button>
        </>
    );
}