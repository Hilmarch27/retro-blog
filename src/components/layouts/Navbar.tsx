import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Input } from "../ui/input"
import { ButtonRetro } from "../custom/ButtonRetro"
export default function MainNavbar() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-[#fbf5e9]">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex">
                    <Link href="#" className="mr-6 flex items-center" prefetch={false}>
                        <MountainIcon className="h-6 w-6" />
                        <span className="sr-only">Logo</span>
                    </Link>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="email" placeholder="Search Article" className="shadow-retro-sm" />
                        <ButtonRetro size={'sm'} type="submit">Search</ButtonRetro>
                    </div>
                </div>
                <nav className="hidden items-center space-x-6 md:flex">
                    {/* untuk menu lainya  */}
                    {/* <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="relative">
                                More
                                <ChevronDownIcon className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[200px]">
                            <DropdownMenuItem>
                                <Link href="#" className="flex w-full items-center gap-2" prefetch={false}>
                                    <FileTextIcon className="h-4 w-4" />
                                    Blog
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#" className="flex w-full items-center gap-2" prefetch={false}>
                                    <CircleHelpIcon className="h-4 w-4" />
                                    FAQs
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#" className="flex w-full items-center gap-2" prefetch={false}>
                                    <LifeBuoyIcon className="h-4 w-4" />
                                    Support
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> */}
                </nav>
                <div className="md:hidden">
                    {/* <Button variant="ghost" size="icon" className="rounded-full">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button> */}
                </div>
            </div>
        </header>
    )
}

// function ChevronDownIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="m6 9 6 6 6-6" />
//         </svg>
//     )
// }


// function CircleHelpIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <circle cx="12" cy="12" r="10" />
//             <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
//             <path d="M12 17h.01" />
//         </svg>
//     )
// }


// function FileTextIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
//             <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//             <path d="M10 9H8" />
//             <path d="M16 13H8" />
//             <path d="M16 17H8" />
//         </svg>
//     )
// }


// // function LifeBuoyIcon(props) {
// //     return (
// //         <svg
// //             {...props}
// //             xmlns="http://www.w3.org/2000/svg"
// //             width="24"
// //             height="24"
// //             viewBox="0 0 24 24"
// //             fill="none"
// //             stroke="currentColor"
// //             strokeWidth="2"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //         >
// //             <circle cx="12" cy="12" r="10" />
// //             <path d="m4.93 4.93 4.24 4.24" />
// //             <path d="m14.83 9.17 4.24-4.24" />
// //             <path d="m14.83 14.83 4.24 4.24" />
// //             <path d="m9.17 14.83-4.24 4.24" />
// //             <circle cx="12" cy="12" r="4" />
// //         </svg>
// //     )
// // }


// function MenuIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <line x1="4" x2="20" y1="12" y2="12" />
//             <line x1="4" x2="20" y1="6" y2="6" />
//             <line x1="4" x2="20" y1="18" y2="18" />
//         </svg>
//     )
// }


function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}