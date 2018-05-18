import React from 'react';
import './Board.css';
import DiceArea from '../DiceArea/DiceArea';
import getPieces from '../getPieces/getPieces';
import Triangle from './Triangle/Triangle';

const board = (props) => {

    let leftDiceArea = null;
    let rigthDiceArea = null;
    if (props.gameStatus >= 20 && props.gameStatus <= 50) {
        leftDiceArea = props.p1IsNext ? <DiceArea dice={props.dice} clicked={props.rollDice} gameStatus={props.gameStatus} noMove={props.noMove} /> : '';
        rigthDiceArea = props.p1IsNext ? '' : <DiceArea dice={props.dice} clicked={props.rollDice} gameStatus={props.gameStatus} noMove={props.noMove} />;
    }


    return (

        <div id="board" className="container-fluid">

            <div id="leftSide" className="row">

                {leftDiceArea}

                <div className="blocksUp">

                    <Triangle color="1" position="top"
                        canMove={props.points[12].canMove}
                        canReceive={props.points[12].canReceive}
                    >
                        {getPieces(props.points[12].player, props.points[12].pieces, "board", props.points[12].canMove)}
                    </Triangle>

                    <Triangle color="2" position="top"
                        canMove={props.points[13].canMove}
                        canReceive={props.points[13].canReceive}
                    >
                        {getPieces(props.points[13].player, props.points[13].pieces, "board", props.points[13].canMove)}
                    </Triangle>

                    <Triangle color="1" position="top"
                        canMove={props.points[14].canMove}
                        canReceive={props.points[14].canReceive}
                    >
                        {getPieces(props.points[14].player, props.points[14].pieces, "board", props.points[14].canMove)}
                    </Triangle>

                    <Triangle color="2" position="top"
                        canMove={props.points[15].canMove}
                        canReceive={props.points[15].canReceive}
                    >
                        {getPieces(props.points[15].player, props.points[15].pieces, "board", props.points[15].canMove)}
                    </Triangle>

                    <Triangle color="1" position="top"
                        canMove={props.points[16].canMove}
                        canReceive={props.points[16].canReceive}
                    >
                        {getPieces(props.points[16].player, props.points[16].pieces, "board", props.points[16].canMove)}
                    </Triangle>

                    <Triangle color="2" position="top"
                        canMove={props.points[17].canMove}
                        canReceive={props.points[17].canReceive}
                    >
                        {getPieces(props.points[17].player, props.points[17].pieces, "board", props.points[17].canMove)}
                    </Triangle>

                </div>

                <div className="blocksDown">

                    <Triangle color="1" position="bottom"
                        canMove={props.points[11].canMove}
                        canReceive={props.points[11].canReceive}
                    >
                        {getPieces(props.points[11].player, props.points[11].pieces, "board", props.points[11].canMove)}
                    </Triangle>

                    <Triangle color="2" position="bottom"
                        canMove={props.points[10].canMove}
                        canReceive={props.points[10].canReceive}
                    >
                        {getPieces(props.points[10].player, props.points[10].pieces, "board", props.points[10].canMove)}
                    </Triangle>

                    <Triangle color="1" position="bottom"
                        canMove={props.points[9].canMove}
                        canReceive={props.points[9].canReceive}
                    >
                        {getPieces(props.points[9].player, props.points[9].pieces, "board", props.points[9].canMove)}
                    </Triangle>

                    <Triangle color="2" position="bottom"
                        canMove={props.points[8].canMove}
                        canReceive={props.points[8].canReceive}
                    >
                        {getPieces(props.points[8].player, props.points[8].pieces, "board", props.points[8].canMove)}
                    </Triangle>

                    <Triangle color="1" position="bottom"
                        canMove={props.points[7].canMove}
                        canReceive={props.points[7].canReceive}
                    >
                        {getPieces(props.points[7].player, props.points[7].pieces, "board", props.points[7].canMove)}
                    </Triangle>

                    <Triangle color="2" position="bottom"
                        canMove={props.points[6].canMove}
                        canReceive={props.points[6].canReceive}
                    >
                        {getPieces(props.points[6].player, props.points[6].pieces, "board", props.points[6].canMove)}
                    </Triangle>
                </div>

                <div className="shadowBox"></div>

            </div>

            <div id="rightSide" className=" row">

                {rigthDiceArea}

                <div className="blocksUp">

                    <Triangle color="1" position="top"
                        canMove={props.points[18].canMove}
                        canReceive={props.points[18].canReceive}
                    >
                        {getPieces(props.points[18].player, props.points[18].pieces, "board", props.points[18].canMove)}
                    </Triangle>

                    <Triangle color="2" position="top"
                        canMove={props.points[19].canMove}
                        canReceive={props.points[19].canReceive}
                    >
                        {getPieces(props.points[19].player, props.points[19].pieces, "board", props.points[19].canMove)}
                    </Triangle>

                    <Triangle color="1" position="top"
                        canMove={props.points[20].canMove}
                        canReceive={props.points[20].canReceive}
                    >
                        {getPieces(props.points[20].player, props.points[20].pieces, "board", props.points[20].canMove)}
                    </Triangle>

                    <Triangle color="2" position="top"
                        canMove={props.points[21].canMove}
                        canReceive={props.points[21].canReceive}
                    >
                        {getPieces(props.points[21].player, props.points[21].pieces, "board", props.points[21].canMove)}
                    </Triangle>

                    <Triangle color="1" position="top"
                        canMove={props.points[22].canMove}
                        canReceive={props.points[22].canReceive}
                    >
                        {getPieces(props.points[22].player, props.points[22].pieces, "board", props.points[22].canMove)}
                    </Triangle>

                    <Triangle color="2" position="top"
                        canMove={props.points[23].canMove}
                        canReceive={props.points[23].canReceive}
                    >
                        {getPieces(props.points[23].player, props.points[23].pieces, "board", props.points[23].canMove)}
                    </Triangle>
                </div>

                <div className="blocksDown">

                    <Triangle color="1" position="bottom"
                        canMove={props.points[5].canMove}
                        canReceive={props.points[5].canReceive}
                    >
                        {getPieces(props.points[5].player, props.points[5].pieces, "board", props.points[5].canMove)}
                    </Triangle>

                    <Triangle color="2" position="bottom"
                        canMove={props.points[4].canMove}
                        canReceive={props.points[4].canReceive}
                    >
                        {getPieces(props.points[4].player, props.points[4].pieces, "board", props.points[4].canMove)}
                    </Triangle>

                    <Triangle color="1" position="bottom"
                        canMove={props.points[3].canMove}
                        canReceive={props.points[3].canReceive}
                    >
                        {getPieces(props.points[3].player, props.points[3].pieces, "board", props.points[3].canMove)}
                    </Triangle>

                    <Triangle color="2" position="bottom"
                        canMove={props.points[2].canMove}
                        canReceive={props.points[2].canReceive}
                    >
                        {getPieces(props.points[2].player, props.points[2].pieces, "board", props.points[2].canMove)}
                    </Triangle>

                    <Triangle color="1" position="bottom"
                        canMove={props.points[1].canMove}
                        canReceive={props.points[1].canReceive}
                    >
                        {getPieces(props.points[1].player, props.points[1].pieces, "board", props.points[1].canMove)}
                    </Triangle>

                    <Triangle color="2" position="bottom"
                        canMove={props.points[0].canMove}
                        canReceive={props.points[0].canReceive}
                    >
                        {getPieces(props.points[0].player, props.points[0].pieces, "board", props.points[0].canMove)}
                    </Triangle>

                </div>

                <div className="shadowBox"></div>
            </div>


            {props.children}

        </div>

    );

}

export default board;