import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// React Twitter Embed:
// https://www.npmjs.com/package/react-twitter-embed

function TwitterTimeline() {
    return (
        <>
            <TwitterTimelineEmbed
                sourceType='profile'
				userId='1260929987768549381'
                theme='light'
                noScrollbar
                noHeader
                options={{height: 360}}
                lang="pt"
            />
        </>
    )
}

export default TwitterTimeline