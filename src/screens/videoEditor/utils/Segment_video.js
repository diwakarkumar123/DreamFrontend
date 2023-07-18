
import { FFmpegKit, FFmpegKitConfig, ReturnCode } from 'ffmpeg-kit-react-native';
import RNFS from 'react-native-fs';



class FFmpegWrapper {
    static getFrames(
        localFileName,
        videoURI,
        frameNumber,
        successCallback,
        errorCallback,
    ) {
        let outputImagePath = `${RNFS.CachesDirectoryPath}/${localFileName}_%4d.png`;
        const ffmpegCommand = `-ss 0 -i ${videoURI} -vf "fps=${30}/1:round=up,scale=${80}:-2" -vframes ${frameNumber} ${outputImagePath}`;

        FFmpegKit.executeAsync(
            ffmpegCommand,
            async session => {
                const state = FFmpegKitConfig.sessionStateToString(
                    await session.getState(),
                );
                const returnCode = await session.getReturnCode();
                const failStackTrace = await session.getFailStackTrace();
                const duration = await session.getDuration();

                if (ReturnCode.isSuccess(returnCode)) {
                    console.log(
                        `Encode completed successfully in ${duration} milliseconds;.`,
                    );
                    console.log(`Check at ${outputImagePath}`);
                    successCallback(outputImagePath);
                } else {
                    console.log('Encode failed. Please check log for the details.');
                    console.log(
                        `Encode failed with state ${state} and rc ${returnCode}.${(failStackTrace, '\\n')
                        }`,
                    );
                    errorCallback();
                }
            },
            log => {
                console.log(log.getMessage());
            },
            statistics => {
                console.log(statistics);
            },
        ).then(session =>
            console.log(
                `Async FFmpeg process started with sessionId ${session.getSessionId()}.`,
            ),
        );
    }
}

export default FFmpegWrapper;


// const Segment_video = async ({
//     input_uri,
//     FRAME_PER_SEC,
//     FRAME_WIDTH,
//     frameNumber,
//     outputImagePath
// }) => {
//     const command = `-ss 0 -i ${input_uri} -vf "fps=${FRAME_PER_SEC}/1:round=up,scale=${FRAME_WIDTH}:-2" -vframes ${frameNumber} ${outputImagePath}`;
//     FFmpegKit.execute(command)
//     .then(async(session)=>{
//             const return_code = session.getReturnCode()
//             if(return_code == 0){
//                 console.log("video segmented succesfull")
//                 return outputImagePath
//             } else{
//                 console.log("video segmented error")
//             }
//     })
// }

// export {Segment_video}