import { getJokeAsMaybe, IMaybe } from '../getJokeAsMAybe';

(async () => {
    const joke: IMaybe<string> = await getJokeAsMaybe()
    console.log(joke.getOrElse('something wrong'))
})()