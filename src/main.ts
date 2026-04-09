import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations'; // Animations
import { provideToastr } from 'ngx-toastr'; // Toastr
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideAnimations(),
    provideToastr({ positionClass: 'toast-top-center', timeOut: 3000,
    closeButton: true,
    progressBar: true,
    newestOnTop: true,
    preventDuplicates: true })
  ]
})
.catch((err) => console.error(err));
