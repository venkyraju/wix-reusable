import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FinalCounter } from "./FinalExample";

export function App() {
  const [increase, setIncrease] = React.useState(0);

  return (
    <div>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Basic:
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            <FinalCounter>
              <FinalCounter.DecButton />
              <FinalCounter.Text />
              <FinalCounter.IncButton />
            </FinalCounter>
            <div className="br" />
            <FinalCounter>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50px"
                }}
              >
                <FinalCounter.IncButton />
                <FinalCounter.Text />
                <FinalCounter.DecButton />
              </div>
            </FinalCounter>
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Shiny:
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            <FinalCounter
              stateReducer={(state, changes) => {
                switch (changes.type) {
                  case FinalCounter.stateChangeTypes.BUTTON_INC_CLICK:
                    return { ...changes, count: state.count + 5 };
                  case FinalCounter.stateChangeTypes.BUTTON_DEC_CLICK:
                    return { ...changes, count: state.count - 5 };
                  default:
                    return changes;
                }
              }}
            >
              <FinalCounter.MaterialDecButton>5</FinalCounter.MaterialDecButton>
              <FinalCounter.MaterialInput />
              <FinalCounter.MaterialIncButton>5</FinalCounter.MaterialIncButton>
            </FinalCounter>
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Complex:
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            <FinalCounter
              stateReducer={(state, changes) => {
                switch (changes.type) {
                  case FinalCounter.stateChangeTypes.BUTTON_INC_CLICK:
                  case FinalCounter.stateChangeTypes.INPUT_ARROW_UP_KEYDOWN:
                    return { ...changes, count: state.count + increase };
                  case FinalCounter.stateChangeTypes.BUTTON_DEC_CLICK:
                  case FinalCounter.stateChangeTypes.INPUT_ARROW_DOWN_KEYDOWN:
                    return { ...changes, count: state.count - increase };
                  default:
                    return changes;
                }
              }}
            >
              <Typography color="textSecondary" gutterBottom>
                amount:
              </Typography>
              <FinalCounter.MaterialDecButton />
              <FinalCounter.MaterialInput />
              <FinalCounter.MaterialIncButton />
            </FinalCounter>
            <FinalCounter onChange={count => setIncrease(count)}>
              <Typography color="textSecondary" gutterBottom>
                increase by:
              </Typography>
              <FinalCounter.MaterialDecButton />
              <FinalCounter.MaterialInput />
              <FinalCounter.MaterialIncButton />
            </FinalCounter>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
