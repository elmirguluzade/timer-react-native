export const timerHandler = (timer) => {
    const arr = timer.split(":")
    if (parseInt(arr[2]) == 59 && parseInt(arr[1]) == 59) {
        let hour = parseInt(arr[0]) + 1
        if (hour < 10) timer = `0${hour}:00:00`
        else timer = `${hour}:00:00`
    }
    else if (parseInt(arr[2]) == 59) {
        let minutes = parseInt(arr[1]) + 1
        if (minutes < 10) timer = `0${parseInt(arr[0])}:0${minutes}:00`
        else timer = `${parseInt(arr[0])}:${minutes}:00`
    }
    else {
        let second = parseInt(arr[2]) + 1
        if (second < 10) timer = `0${parseInt(arr[0])}:0${parseInt(arr[1])}:0${second}`
        else timer = `0${parseInt(arr[0])}:0${parseInt(arr[1])}:${second}`
    }
    return timer;
}
