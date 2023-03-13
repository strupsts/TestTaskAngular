import {Component, OnInit} from '@angular/core';
import {ICard} from "./models/ICard";
import {FilmsService} from "./services/films-service";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cards$: Observable<ICard[]> // Определение типа стрима
  loading = false             // В случае значения true появляется надпись "Загрузка"
  userSearching: string = ''  // Дефолтное значение поля поиска
  userGenre: number | false = false // Дефолтное значение селекта жанров. Позволяет отобразить "Все" категории
                                    // при загрузке страницы

  constructor(public filmsService: FilmsService) {} // Подключение сервиса

  ngOnInit(): void {
    // Пока данные не полученые отображается надпись "Загрузка". Как только получили надпись исчезает,
    // а фильмы начинают отображаться согласно фильтрации на стороне html файла.
    this.loading = true
    this.cards$ = this.filmsService.getAllFilms().pipe(tap(()=> this.loading = false ))
    this.filmsService.checkFavouriteOnInit() // Проверка на наличие фильма выбранного пользователем.
                                            // Если пользователь выбрал перед закрытием - при следующей
                                           // загрузке карточка подтягивается в "Лучшие фильмы", а иконка
                                          // с этим фильмом закрашивается.
  }

}
