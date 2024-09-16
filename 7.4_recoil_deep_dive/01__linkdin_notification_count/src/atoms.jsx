 import {atom , selector} from 'recoil'

export const networkAtom = atom({
    key:'networkAtom',
    default:14
})

export const jobsAtom = atom({
    key:'jobsAtom',
    default:0
})

export const notificationAtom =  atom({
    key:'notificationAtom',
    default:9
})

export const messagingAtom = atom({
    key:"messagingAtom",
    default:12
})

// selector
export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get})=>{
        const notificationAtomCount = get(notificationAtom);
        const messageAtomCount = get(messagingAtom);
        const networkNotificationCount = get(networkAtom);
        const jobsAtomsCount = get(jobsAtom);

        return notificationAtomCount + messageAtomCount +networkNotificationCount + jobsAtomsCount;
    }
})