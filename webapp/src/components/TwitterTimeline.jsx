import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function TwitterTimeline() {
    return (
        <>
            <TwitterTimelineEmbed
                sourceType="timeline"
                userId="1260929987768549381"
                theme="light"
                noScrollbar
                noHeader
                options={{height: 360}}
                lang="pt"
            />
        </>
    )
}

export default TwitterTimeline