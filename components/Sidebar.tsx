import type { SidebarProps } from "../libs/types";
const Sidebar = ({ userName, type }: SidebarProps) => (
    <aside
        className="d-flex flex-column p-3"
        style={{
            width: "200px",
            backgroundColor: "#f2f2f2",
            justifyContent: "space-between",
        }}
    >
        <nav className="nav flex-column gap-2">
            <h5>เมนู</h5>
            <a className="nav-link active" href="#">
                หน้าแรก
            </a>
            <a className="nav-link" href="#">
                รายการ
            </a>
            <a className="nav-link" href="#">
                เกี่ยวกับ
            </a>
        </nav><div className="fw-bold text-muted">
            <p>{userName}:{type}</p>
        </div>
    </aside>
);
export default Sidebar;