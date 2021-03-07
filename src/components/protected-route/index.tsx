import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useStores } from '../../stores';

interface Props {
    path: string;
    exact?: boolean;
    component?: () => React.ReactElement;
    children?: string | React.ReactElement | React.ReactElement[];
}

export const ProtectedRoute = observer((props: Props) => {
    const [canAccess, setCanAccess] = useState<boolean>(true);
    const { authStore } = useStores();

    useEffect(() => {
        setCanAccess(authStore.user.token !== '');
    })

    if(!canAccess) return <Redirect to='/login' />

    if(!props.children && !props.component) return <Route path={props.path} exact={props.exact}> You need to pass a component in children or by component </Route>
    if(!props.children && props.component) return <Route path={props.path} exact={props.exact} component={props.component}></Route>
    if(props.children && !props.component) return <Route path={props.path} exact={props.exact}> {props.children} </Route>

    return <div>You need to pass a component by children or component</div>
});
