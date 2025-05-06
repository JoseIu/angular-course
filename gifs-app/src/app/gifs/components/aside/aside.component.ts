import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../../../components/logo/logo.component';
import { SearchIconComponent } from '../../../components/search-icon/search-icon.component';
import { TredingIconComponent } from '../../../components/treding-icon/treding-icon.component';

interface MenuOption {
  label: string;
  subLabel: string;
  icon: Type<any>;
  route: string;
}

@Component({
  selector: 'gifs-aside',
  imports: [LogoComponent, RouterLinkActive, RouterLink, NgComponentOutlet],
  templateUrl: './aside.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent {
  menuOptions: MenuOption[] = [
    {
      label: 'Trending',
      subLabel: 'Popular gifs',
      icon: TredingIconComponent,
      route: '/dashboard/trending',
    },
    {
      label: 'Search',
      subLabel: 'Search for gifs',
      icon: SearchIconComponent,
      route: '/dashboard/search',
    },
  ];
}
