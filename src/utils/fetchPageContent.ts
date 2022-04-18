import fetch from "node-fetch";
import { getConfig } from "../config";

export type FetchPageResult = {
    textContent: string,
    url: string
}


export function fetchPageTextContent(url: string): Promise<FetchPageResult> {
    const config = getConfig();
    return new Promise((resolve, reject) => {
        
        return fetch(url, {method: 'GET',
        headers: { 'Content-Type': 'application/json',
                'User-Agent' : config.settings.User_Agent,
                'X-Requested-With': 'XMLHttpRequest',
                'Cookie': config.settings.Cookie
            }} )
            .then(rs => rs.text())
            .then(textContent => resolve({ textContent, url }))
            .catch(reject);
    });
}