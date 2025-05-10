import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gif-list-skeleton',
  imports: [],
  templateUrl: './gif-list-skeleton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListSkeletonComponent {
  numberOfSkeletons = Array.from({ length: 20 });
}
