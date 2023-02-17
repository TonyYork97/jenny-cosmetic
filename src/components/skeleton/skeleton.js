import React, { useState } from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = (props) => {
    const [width, setWidth] = useState('100%');

    return (
        <>
            <div className="list-item">
                <ContentLoader
                    rtl
                    speed={1}
                    width={width}
                    height={511.5}
                    viewBox="0 0 100% 100%"
                    backgroundColor="#808080"
                    foregroundColor="#D73171"
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    {...props}
                >
                    <rect x="0" y="0" rx="12" ry="12" width="100%" height="85%" />
                    <rect x="67%" y="88%" rx="4" ry="4" width="33%" height="3%" />
                    <rect x="85%" y="94%" rx="4" ry="4" width="15%" height="2%" />
                    <rect x="0" y="94%" rx="4" ry="4" width="46%" height="3%" />
                </ContentLoader>
            </div>
        </>
    )
}