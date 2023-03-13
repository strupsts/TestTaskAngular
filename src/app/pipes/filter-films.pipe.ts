import { Pipe, PipeTransform } from '@angular/core';
import {ICard} from "../models/ICard";

@Pipe({
  name: 'filterFilms'
})

// Пайп осуществляющий фильтрацию по поиску и выбранному жанру
export class FilterFilmsPipe implements PipeTransform {
  // cards: массив обьектов фильмов придеший с сервера. search: данные из поискового поля.
  // genre: выбраннный жанр
  transform(cards: ICard[], search: string, genre: number | false): ICard[] {
    // Если пользователь выбрал жанр, переменная поменялась с false на number,
    // а значит производится фильтрация по жанрам
    if (genre) {
      cards = cards.filter(f => f.genre.includes(genre))
    }
    // Если пользователь ввел пробелы или ничего не ввел фильтрация по поиску неактивна.
    if(!search.trim()) {
      return cards
    }
    // Если в поле поиска появился текст - производится фильтрация.
    // Фильтрация по жанрам в этом случае также произведется
    return cards.filter(f => f.name.toLowerCase().includes(search.toLowerCase()))
  }

}
