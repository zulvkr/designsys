import { ArrowRight, Check, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/dashboard/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/dashboard/ui/table"
import { CheckCircle } from "lucide-react"

interface ITableDatum {
  desc: string
  points: number
  action: "try" | "watch" | "none"
  status: "completed" | "in-progress" | "not-started"
}

const tableData: ITableDatum[] = [
  {
    desc: "Create an account",
    points: 0,
    action: "none",
    status: "completed",
  },
  {
    desc: "Generate a paragraph for your website",
    points: 1000,
    action: "try",
    status: "not-started",
  },
  {
    desc: "Generate a caption for your social media post",
    points: 1000,
    action: "try",
    status: "not-started",
  },
  {
    desc: "Tell casper what to write about",
    points: 2500,
    action: "try",
    status: "not-started",
  },
  {
    desc: "Watch introduction video",
    points: 500,
    action: "watch",
    status: "not-started",
  },
]

const actionableColumnContent: Record<ITableDatum["action"], React.ReactNode> =
  {
    try: (
      <Button size="xs" variant="outline">
        Try it
        <ArrowRight className="h-3 w-3 ml-1" />
      </Button>
    ),
    watch: (
      <Button size="xs" variant="outline">
        Watch now
        <ArrowRight className="h-3 w-3 ml-1" />
      </Button>
    ),
    none: null,
  }

const statusColumnIcon: Record<ITableDatum["status"], React.ReactNode> = {
  completed: <CheckCircle className="h-6 w-6 text-green-500" />,
  "in-progress": <ArrowRight className="h-6 w-6 text-muted-foreground/30" />,
  "not-started": <ArrowRight className="h-6 w-6 text-muted-foreground/30" />,
}

const numberFormatter = new Intl.NumberFormat("en-US")

export default function DashboardPageReact() {
  return (
    <div className="grid grid-cols-[minmax(200px,_250px),_1fr]">
      <aside className="border-r">Casper</aside>
      <section>
        <h1 className="text-2xl font-bold py-4 px-6">Dashboard</h1>
        <div className="px-6">
          <div className="mx-auto max-w-[756px] pt-[54px]">
            <h2 className="text-4xl font-bold">Welcome to Casper👋</h2>
            <p className="mt-1 text-xl text-muted-foreground">
              Follow these steps to get started and earn free points!
            </p>
            <div className="rounded-lg border mt-4 ">
              <Table className="">
                <TableHeader className="">
                  <TableRow className="h-[60px] hover:bg-transparent">
                    <TableHead className="text-xl text-foreground/90">
                      <div className="flex items-center font-bold text-foreground/80">
                        <Check className="h-7 w-7 text-muted-foreground/70 mr-4" />
                        Get to know Casper
                      </div>
                    </TableHead>
                    <TableHead
                      colSpan={2}
                      className="text-right text-muted-foreground"
                    >
                      5,000 points available
                    </TableHead>
                  </TableRow>
                  <TableRow className="h-1 p-0">
                    <TableHead className="p-0 h-1" colSpan={3}>
                      <PercentageIndicator />
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map(({ action, desc, points, status }, i) => (
                    <TableRow
                      key={i}
                      className={
                        status === "completed"
                          ? "bg-green-50 hover:bg-green-100 text-green-700 line-through"
                          : ""
                      }
                    >
                      <TableCell>
                        <div className="flex items-center">
                          <span className="mr-4">
                            {statusColumnIcon[status]}
                          </span>
                          <span>{desc}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-right font-tnum">
                        {points ? numberFormatter.format(points) : "-"}
                      </TableCell>
                      <TableCell className="text-right">
                        {actionableColumnContent[action]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function PercentageIndicator() {
  return (
    <div className="relative h-1 bg-gray-200 overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-green-500"
        style={{ width: "20%" }}
      />
    </div>
  )
}
