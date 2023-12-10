import { Suspense } from "react"
import TodoLayout from "./layout"
import Loading from "./loading"

export default function Todo() {
    return(
        <TodoLayout>
            <Suspense fallback={<Loading />}>
                <p>This is todo layout</p>
            </Suspense>            
        </TodoLayout>
    )
}