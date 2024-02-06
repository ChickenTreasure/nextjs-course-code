import {useRouter} from 'next/router'

function SlectedClientProjectPage(){
const router = useRouter();

console.log(router.query);

    return <div>
        <h1>The Project Page for</h1>
    </div>
}

export default SlectedClientProjectPage;