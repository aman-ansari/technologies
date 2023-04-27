import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberDirective, FloatNumberDirective } from './directive/number.directive';
import { RouterBackDirective, onlyCharactersDirective, onlyNumbersAndHyphenDirective, onlyCharaterAndHyphenDirective } from './directive/router-back.directive';

const components = [
  NumberDirective,
  FloatNumberDirective,
  RouterBackDirective,
  onlyCharactersDirective,
  onlyNumbersAndHyphenDirective,
  onlyCharaterAndHyphenDirective
]
@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components
})
export class SharedModule { }
