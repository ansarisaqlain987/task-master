"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react"
import { Reorder } from "framer-motion"
import { Button } from "@/components/ui/button";
import { FaTrash } from "react-icons/fa";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ListPage() {
    const [items, setItems] = useState([1, 2, 3, 4, 5]);
    const onCompleteClick = (item: number, index: number) => {        
        setItems((prev) => {
            const newItems = Object.assign([], prev);
            newItems.splice(index, 1)
            newItems.push(item)
            return newItems
        })
    }
    return <div className='container mx-auto px-0 my-[100px]'>
        <Reorder.Group values={items} onReorder={(e) => { console.log(e); setItems(e) }}>
            {items.map((item, index) => {
                return (
                    <Reorder.Item key={item} value={item}>
                        <Card className='' >
                            <CardHeader>
                                <div className='flex gap-4'>
                                    <div>cb</div>
                                    <div className="flex-1">task name {item}</div>
                                    <Button variant={'destructive'}><FaTrash /></Button>
                                    <Button onClick={() => onCompleteClick(item, index)}>Complete</Button>
                                </div>
                            </CardHeader>
                        </Card>
                    </Reorder.Item>
                )
            }
            )}
        </Reorder.Group>

    </div>
}