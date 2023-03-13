import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FilmsService} from "../../services/films-service";
import {ICard} from "../../models/ICard";



@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent {

  // Получение инстанса сервиса FilmsService и данных которые были переданы в конфиг диалог.окна
  constructor(@Inject(MAT_DIALOG_DATA) public data: ICard, public filmService: FilmsService) {
  }


  // Функция возвращает boolean, является ли выбранный фильм "Лучшим"
  checkOnFav(filmName: string) {
    return filmName == this.filmService.userFavourite?.name
  }

  // Функция возвращает строку, текст кнопки, в зависимости от наличия фильма в "Лучших"
  dialogFavValue(filmName: string){
    return this.checkOnFav(filmName) ? 'Удалить из лучших фильмов' : 'Выбрать лучшим фильмом'
  }


}
