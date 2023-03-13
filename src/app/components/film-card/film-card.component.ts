import {Component, Input} from '@angular/core';
import {ICard} from "../../models/ICard";
import {FilmsService} from "../../services/films-service";
import { MatDialog } from "@angular/material/dialog";
import {CardDialogComponent} from "../card-dialog/card-dialog.component";


@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent {
  @Input() card: ICard;      // Получение данных с родительского компонента

  userHover = false;

  // Подключение основного сервиса и инстанса диалогового окна
  constructor(public filmService: FilmsService, public dialog: MatDialog) {}

  // Функция открывает диалоговое окно и передает туда конфиг
  openCardDialog(card:any) {
    this.dialog.open(CardDialogComponent, {  // Установка компонента в качестве шаблона для окна
      data: card,                                  // Прокидывание в диалог карточки на которую нажали
      enterAnimationDuration: 170,                 // Подгонка анимации всплытия окна как на макете
      exitAnimationDuration:170,
      autoFocus: false                             // Если не установить фокус падает на кнопку изменяя её вид
    })
  }

  // Функция возвращает путь для отображения иконки лайка в соответствии, выбранный этот фильм
  // пользователем лучшим или нет (иконка закрашена / полая)
  getLikePath(filmName: string){
    return this.filmService.filmImgPath+((this.filmService.userFavourite?.name === filmName ) ? 'likeActive.png' : 'likeNon.png')
  }

}
