'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import Image from "next/image"
import { Button } from "../../../components/ui/button"
import { HomeIcon, SearchCheckIcon, StarIcon, VideoIcon, Wallet } from "lucide-react"
import { useAuthContext } from "@/app/provider"

const MenuOptions = [
  {
    title: 'Home',
    url:'/dashboard',
    icon: HomeIcon
  },
  {
    title: 'Create New Video',
    url: '/create-new-video',
    icon: VideoIcon
  },
  {
    title: 'Explore',
    url: '/explore',
    icon: SearchCheckIcon
  },{
    title: 'Billing',
    url: '/billing',
    icon: Wallet
  },
]

export function AppSidebar() {
  const {user} = useAuthContext()
  console.log(user, 'user in appsidebar')



  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex gap-3 items-center mb-4">
          <Image src={'/logo.svg'} alt="Logo" height={40} width={40} />
          <h1 className="text-lg">Video Gen</h1>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <div className="flex flex-col items-center mb-10">
              <Button>+ Create New Video</Button>
          </div>
          <SidebarMenu>
              {MenuOptions.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a className="flex items-center text-[15px]" href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="bg-gray-800 p-5 rounded-xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <StarIcon />
            <p>{user?.[0]?.credits} Credits Left</p>
          </div>
          <Button className='w-full'>Buy More Credits</Button>
        </div>
        
      </SidebarFooter>
    </Sidebar>
  )
}
