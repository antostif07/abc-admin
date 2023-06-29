import { Menu } from "react-admin"

export const AdminMenu = () => (
    <Menu>
        <Menu.ResourceItem name="courses" />
        <Menu.ResourceItem name="centers" />
        <Menu.ResourceItem name="users" />
    </Menu>
)