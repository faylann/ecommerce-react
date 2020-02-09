import React from 'react'

export default function Title({ name, title }) {
    return (
        <div className="row">
            <div className="col-10 max-auto text-center text-title my-2">
                <h1 className="text-uppercase font-weight-bold">
                    {name} <strong className="text-blue">{title}</strong>
                </h1>
            </div>
        </div>
    )
}

