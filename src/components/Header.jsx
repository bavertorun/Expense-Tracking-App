import {useState} from 'react'
import {moneyFormat} from '../helpers';

function Header({total, money}) {
    return (
        <>

            <div className="header">
                <span>${moneyFormat(money - total)}</span>
            </div>

            <style jsx>{`
                .header {
                    position: sticky;
                    top: 0;
                    background: rgb(34,194,137);
                    height: 100px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-size: 35px;
                    letter-spacing: 1px;
                }

                .header.empty {
                    background: linear-gradient(to bottom, #b82020, #be1414);
                }

                .header span {
                    margin: 0 10px;
                    font-weight: bold;
                }
            `}</style>
        </>
    )
}

export default Header