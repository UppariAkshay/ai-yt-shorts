// import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar.jsx"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/appSidebar"

export default function Layout({children})
{
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            {children}
        </SidebarProvider>
    )
}
