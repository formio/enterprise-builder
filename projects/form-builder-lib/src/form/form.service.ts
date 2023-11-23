import { Injectable } from '@angular/core';
import { FormManagerService } from '@formio/angular/manager';

@Injectable()
export class ManagerService extends FormManagerService {

  setAccess() {
    this.access = {
      formCreate: true,
      formView: true,
      formSubmission: true,
      formEdit: true,
      formPermission: true,
      formDelete: true,
      projectSettings: true,
      userManagement: true
    };
    if (this.auth) {
      this.access = {
        formCreate: false,
        formView: false,
        formSubmission: false,
        formEdit: false,
        formPermission: false,
        formDelete: false,
        projectSettings: false,
        userManagement: false
      };
      this.ready = this.auth.ready.then(() => {
        let administrator = this.auth.roles["administrator"];
        let formbuilder = this.auth.roles["formbuilder"];
        let formadmin = this.auth.roles["formadmin"];

        if (this.auth.user && this.auth.user.roles) {
          this.auth.user.roles.forEach((roleId: string) => {
            if (administrator._id === roleId) {
              this.access.formCreate = true;
              this.access.formView = true;
              this.access.formSubmission= true;
              this.access.formEdit = true;
              this.access.formPermission = true;
              this.access.formDelete = true;
              this.access.projectSettings = true;
              this.access.userManagement = true;
            }
            else {
              if (formadmin && formadmin._id === roleId) {
                this.access.formCreate = this.auth.formAccess.create_all.includes(roleId);
                this.access.formEdit = this.auth.formAccess.update_all.includes(roleId);
                this.access.formPermission = this.auth.formAccess.update_all.includes(roleId);
                this.access.formDelete =  this.auth.formAccess.delete_all.includes(roleId);
                this.access.formView = this.auth.formAccess.read_all.includes(roleId);
                this.access.formSubmission = this.auth.formAccess.read_all.includes(roleId);
              }
              if (formbuilder && formbuilder._id === roleId) {
                this.access.formCreate = this.auth.formAccess.create_all.includes(roleId);
                this.access.formEdit = this.auth.formAccess.update_all.includes(roleId);
                this.access.formPermission = this.auth.formAccess.update_all.includes(roleId);
                this.access.formDelete =  this.auth.formAccess.delete_all.includes(roleId);
                this.access.formView = this.auth.formAccess.read_all.includes(roleId);
              }
            }
          });
        }
      });
    } else {
      this.ready = Promise.resolve(false);
    }
  }
}
