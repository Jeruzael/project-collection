import { Suspense } from "react"
import TodoLayout from "./layout"

export default function Todo() {
    return(
        <TodoLayout>
            <Suspense>
                <p>This is todo layout</p>
            </Suspense>            
        </TodoLayout>
    )
}