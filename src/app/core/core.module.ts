import { AuthorizationService } from './services/authorization.service';
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginGuard } from './guards/login.guard';

/**
 * Checks if a module is imported more than once
 */
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `${moduleName} has already been loaded. Import Core modules in the AppModule only.`
    );
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [AuthorizationService, LoginGuard],
})
export class CoreModule {
  /**
     * Core Module can only being imported once
     * @param parentModule
     */
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  /**
     * All services imported in Code Module will be singleton
     * It means that the same instance will appear in the hole application
     * @returns {{ngModule: CoreModule, providers: Array}}
     */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [AuthorizationService, LoginGuard],
    };
  }
}
