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
                        headers: {
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                            'Accept-Encoding': 'gzip, deflate, br',
                            'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                            'Cache-Control': 'max-age=0',
                            'Connection': 'keep-alive',
                            'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"',
                            'User-Agent': config.settings.User_Agent}
                } )
            .then(rs => rs.text())
            .then(textContent => resolve({ textContent, url }))
            .catch(reject);
    });
}