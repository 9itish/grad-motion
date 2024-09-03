@echo off
setlocal enabledelayedexpansion

REM Loop through all MP4 files in the current directory
for %%f in (*.mp4) do (
    REM Get the base file name without extension
    set "filename=%%~nf"
    
    REM Create a color palette for better GIF quality
    ffmpeg -i "%%f" -vf "fps=30,scale=600:-1:flags=lanczos,palettegen" "!filename!_palette.png"
    
    REM Convert the video to GIF using the palette
    ffmpeg -i "%%f" -i "!filename!_palette.png" -filter_complex "fps=10,scale=600:-1:flags=lanczos[x];[x][1:v]paletteuse" "!filename!.gif"
    
    REM Delete the temporary palette file
    del "!filename!_palette.png"
    
    echo Converted %%f to !filename!.gif
)

echo All videos have been converted!
pause
