import { DummyType } from '@app/shared/types/DummyType';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class DummyService {
  private readonly logger = new Logger(DummyService.name);

  private readonly dummies = [
    {
      "id": 1,
      "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
      "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
      "releasedAt": "2023-11-14T22:00:00.000Z",
      "certification": "PG-13",
      "tagline": "Everyone hungers for something.",
      "origin": "UA",
      "originalLanguage": "English",
      "runtime": "2h 37m",
      "rating": 72
    },
    {
      "id": 2,
      "title": "Wonka",
      "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
      "releasedAt": "2023-12-05T22:00:00.000Z",
      "certification": "PG",
      "tagline": "Every good thing in this world started with a dream.",
      "origin": "UA",
      "originalLanguage": "English",
      "runtime": "1h 57m",
      "rating": 73
    },
    {
      "id": 3,
      "title": "The Family Plan",
      "overview": "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
      "releasedAt": "2023-12-13T22:00:00.000Z",
      "certification": "PG-13",
      "origin": "UA",
      "originalLanguage": "English",
      "runtime": "1h 59m",
      "rating": 76
    },
    {
      "id": 4,
      "title": "Chicken Run: Dawn of the Nugget",
      "overview": "A band of fearless chickens flock together to save poultry-kind from an unsettling new threat: a nearby farm that's cooking up something suspicious.",
      "releasedAt": "2023-12-07T22:00:00.000Z",
      "certification": "PG",
      "origin": "UA",
      "tagline": "This time, they're breaking in!",
      "originalLanguage": "English",
      "runtime": "1h 37m",
      "rating": 76
    },
    {
      "id": 5,
      "title": "Yu Yu Hakusho",
      "overview": "After a selfless act costs him his life, teen delinquent Yusuke Urameshi is chosen as a Spirit Detective to investigate cases involving rogue yokai.",
      "releasedAt": "2023-12-13T22:00:00.000Z",
      "certification": "TV-MA",
      "tagline": "Ready for an epic yokai battle?",
      "originalLanguage": "English",
      "rating": 80
    },
    {
      "id": 6,
      "title": "Leave the World Behind",
      "overview": "A family's getaway to a luxurious rental home takes an ominous turn when a cyber attack knocks out their devices—and two strangers appear at their door.",
      "releasedAt": "2023-11-21T22:00:00.000Z",
      "certification": "R",
      "origin": "US",
      "tagline": "There's no going back to normal.",
      "originalLanguage": "English",
      "rating": 66
    },
    {
      "id": 7,
      "title": "Reacher",
      "overview": "When retired Military Police Officer Jack Reacher is arrested for a murder he did not commit, he finds himself in the middle of a deadly conspiracy full of dirty cops, shady businessmen and scheming politicians.",
      "releasedAt": "2022-02-02T22:00:00.000Z",
      "certification": "TV-MA",
      "tagline": "Reacher's back.",
      "originalLanguage": "English",
      "rating": 80
    }
  ]

  /**
   *
   * @returns
   */
  async getAllDummies(): Promise<DummyType[]> {
    return this.dummies;
  }
}
