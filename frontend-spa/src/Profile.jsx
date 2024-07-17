import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Profile() {
    const [principal, setPrincipal] = useState({})

    useEffect(() => {
        axios({
            baseURL: 'http://localhost:3000/userinfo'
        })
            .then(res => setPrincipal(res.data))
    }, [])

    return (
        <>
            <div>
                <br />
                <h1>OAuth 2.0 Login with Spring Security</h1>
            </div>
            <div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <a className="btn btn-lg btn-primary me-md-2" href="/resource" role="link" style={{ marginTop: '10px' }}>
                        Recurso protegido
                    </a>
                </div>
            </div>
            <br />
            <div>
                You are successfully logged in <span style={{ fontWeight: 'bold' }}>{principal.name}</span>
                via the OAuth 2.0 Client <span style={{ fontWeight: 'bold' }}>{principal.clientName} </span>
                with id token <span style={{ fontWeight: 'bold', overflow: 'auto' }}>{principal.token}</span>
            </div>
            <div>&nbsp;</div>
            <div>
                <span style={{ fontWeight: 'bold' }}>User attributes:</span>
                <ul>
                    {principal && principal.userAttributes && Object.entries(principal.userAttributes)
                        .map(([key, value]) => (
                            <li key={key}>
                                <span style={{ fontWeight: 'bold' }}>{key}</span>: <span>{value}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Profile