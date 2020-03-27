

export class Role{
    roleId: number // primary key
    roleName: string // not null, unique
    constructor(roleId:number,roleName:string)
    {
        this.roleId = roleId
        this.roleName = roleName
    }
}