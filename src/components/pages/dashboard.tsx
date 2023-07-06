import Logo from "@/assets/icons/postman.svg"
import SSLogo from "@/assets/icons/system-suspend.svg"
import {
  BadgeHelp,
  File,
  HelpCircle,
  HelpingHand,
  Home,
  Image,
  LayoutGrid,
  LucideIcon,
  MessagesSquare,
  Plus,
  Settings,
  TerminalSquare,
} from "lucide-react"

import { cn } from "@/lib/utils"

import { ProjectCombobox } from "../dashboard/combobox"
import OnboardingTable from "../dashboard/onboardingtable"
import {
  SidebarInfo,
  SidebarInfoCloseButton,
  SidebarInfoContent,
  SidebarInfoTitle,
} from "../dashboard/sidebarinfo"
import { Badge } from "../dashboard/ui/badge"
import { Button, buttonVariants } from "../dashboard/ui/button"

const navItems: NavItemProps[] = [
  {
    label: "Dashboard",
    icon: Home,
    active: true,
  },
  {
    label: "Templates",
    icon: LayoutGrid,
  },
  {
    label: "Chat",
    icon: MessagesSquare,
    indicator: "Beta",
  },
  {
    label: "Documents",
    icon: File,
    button: (
      <Button
        size="iconXs"
        variant="ghost"
        className="hover:bg-white rounded-full"
      >
        <Plus className="w-4 h-4" />
      </Button>
    ),
  },
  {
    label: "Recipes",
    icon: TerminalSquare,
  },
  {
    label: "Art",
    icon: Image,
    indicator: "Upgrade",
  },
  {
    label: "Settings",
    icon: Settings,
  },
  {
    label: "Help",
    icon: HelpCircle,
  },
]

export default function DashboardPageReact() {
  return (
    <div className="grid grid-cols-[250px,_1fr] min-h-screen">
      <div className="border-r">
        <aside className="custom-scrollbar px-4 space-y-4 overflow-auto max-h-screen fixed w-[250px]">
          <div className="flex items-center mt-4">
            <img src={Logo} className="w-8" />
            <h2 className="text-xl ml-3">Casper</h2>
          </div>
          <div>
            <ProjectCombobox />
          </div>
          <nav>
            <ul className="-mx-4">
              {navItems.slice(0, -2).map((item) => (
                <NavItems key={item.label} {...item} />
              ))}
            </ul>
          </nav>

          <SidebarInfo>
            <SidebarInfoCloseButton />
            <SidebarInfoTitle>
              <img src={Logo} className="h-4 w-4 mr-2 inline-flex" />
              Get Casper for Chrome
            </SidebarInfoTitle>
            <SidebarInfoContent>
              <a className="underline text-blue-700 cursor-pointer">
                Install extension
              </a>
            </SidebarInfoContent>
          </SidebarInfo>

          <SidebarInfo className="bg-muted/50">
            <SidebarInfoTitle>
              <img src={SSLogo} className="h-4 w-4 mr-2 inline-flex" />
              Trial ends in 7 days
            </SidebarInfoTitle>
            <SidebarInfoContent className="text-center">
              You are on free trial on the{" "}
              <span className="font-bold underline">Boss Mode</span> plan on{" "}
              <span className="font-bold">monthly</span> billing.
              <Button size="xs" variant="outline" className="w-full mt-1">
                View Details
              </Button>
            </SidebarInfoContent>
          </SidebarInfo>

          <nav>
            <ul className="-mx-4">
              {navItems.slice(-2).map((item) => (
                <NavItems key={item.label} {...item} />
              ))}
            </ul>
          </nav>
        </aside>
      </div>
      <section>
        <h1 className="text-2xl font-bold py-4 px-6">Dashboard</h1>
        <div className="px-6">
          <div className="mx-auto max-w-[756px] pt-[54px] space-y-4">
            <div>
              <h2 className="text-4xl font-bold">Welcome to Casper👋</h2>
              <p className="mt-1 text-xl text-muted-foreground">
                Follow these steps to get started and earn free points!
              </p>
            </div>
            <OnboardingTable />
            <div className="border flex bg-blue-50 p-4 rounded-lg items-center">
              <div className="flex-1">
                Upgrade your plan before your trial ends in 5 days to get 5,000
                bonus points
              </div>
              <Button
                size="sm"
                className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 active:hover:bg-blue-900"
              >
                Select plan
              </Button>
            </div>
          </div>
        </div>
        <div className="h-[100px]" />
      </section>
      <div className="fixed bottom-4 right-4">
        <Button size='icon' className="bg-gradient-to-br from-[#BF3CCA] to-[#4D1981] rounded-full shadow">
          <HelpCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  )
}

interface NavItemProps {
  label: string
  icon: LucideIcon
  active?: boolean
  indicator?: string
  button?: React.ReactNode
}

function NavItems({
  label,
  active,
  indicator,
  button,
  ...props
}: NavItemProps) {
  return (
    <li key={label}>
      <a
        className={buttonVariants({
          variant: "ghost",
          size: "sm",
          className: cn(
            "space-x-4 w-full cursor-pointer text-muted-foreground text-base group",
            active && "text-blue-700 hover:text-blue-700"
          ),
        })}
      >
        <props.icon
          className={cn(
            "h-4 w-4 text-muted-foreground/70 group-hover:text-foreground",
            active && "text-blue-700 group-hover:text-blue-700"
          )}
        />
        <div
          className={cn(
            "flex-1 text-foreground",
            active && "text-blue-700 hover:text-blue-700"
          )}
        >
          {label}
        </div>
        {indicator && <Badge variant="outline">{indicator}</Badge>}
        {button}
      </a>
    </li>
  )
}
