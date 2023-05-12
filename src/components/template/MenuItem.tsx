import Link from "next/link"
import React from "react"

interface MenuItemProps {
    url: string,
    icon: any,
    children: any,
    className?: string
}

export default function MenuItem(props: any){
    return(
        <Link href={props.url}>
            <div className={`
              flex flex-col items-center gap-1 
              cursor-pointer w-24
            `}>
                <div className={`
                  flex justify-center items-center
                  w-24 h-24 rounded-2xl 
                  border border-zinc-800
                  ${props.className ?? ''}
                `}>{props.icon && React.cloneElement(props.icon, {
                    size: 70,
                    strokeWidth: 1
                })}</div>
                <div className="text-xs text-center">{props.children}</div>
            </div>
        </Link>
    )
}