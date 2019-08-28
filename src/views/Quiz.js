import React from "react";


class Quiz extends React.Component{
  state={
    zombieScore: 0,
    questions: [],
    allAnswerData: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/questions')
    .then(res =>res.json())
    .then(data => {
      let questions = data.map(value => value.value)
      this.setState({
        questions: questions
      })
    })
    fetch('http://localhost:3000/answers')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allAnswerData: data
      })
    })
  }

  handleq1Change = (e, {q1Answer}) => {
    this.setState({ q1Answer: e.target.innerText })
  }

  handleq2Change = (e, {q2Answer}) => {
    if(this.state.q1Answer === 'their brain'){
      this.setState({zombieScore: this.state.zombieScore + 1})
    }
    this.setState({ q2Answer: e.target.innerText })
  }

  handleq3Change = (e, {q3Answer}) => {
    if(this.state.q2Answer === "Who me?! I'm way too slow!"){
      this.setState({zombieScore: this.state.zombieScore + 1})
    }
    this.setState({ q3Answer: e.target.innerText })
  }

  handleq4Change = (e, {q4Answer}) => {
    if(this.state.q3Answer === "Lately, I just want meat. Like, any kind of flesh at all will work!"){
      this.setState({zombieScore: this.state.zombieScore + 1})
    }
    this.setState({ q4Answer: e.target.innerText })
  }

  handleq5Change = (e, {q5Answer}) => {
    if(this.state.q4Answer === "I hate her. We're just so different now. I've been waiting for my chance to tear her apart."){
      this.setState({zombieScore: this.state.zombieScore + 1})
    }
    this.setState({ q5Answer: e.target.innerText })
  }

  handleq6Change = (e, {q6Answer}) => {
    if(this.state.q5Answer === "I’m dead on my feet"){
      this.setState({zombieScore: this.state.zombieScore + 1})
    }
    this.setState({ q6Answer: e.target.innerText })
  }

  handleq7Change = (e, {q7Answer}) => {
    if(this.state.q6Answer === "Lifeless"){
      this.setState({zombieScore: this.state.zombieScore + 1})
    }
    this.setState({ q7Answer: e.target.innerText })
  }

  handleq8Change = (e, {q8Answer}) => {
    if(this.state.q7Answer === "Staggering"){
      this.setState({zombieScore: this.state.zombieScore + 1})
    }
    this.setState({ q8Answer: e.target.innerText })
  }

  

  render(){
    return(
      <div id="quiz-form">
      {/* <Form>
        <Grid>
          <Grid.Row>
            <Grid.Column centered>
              <Form.Field id="sexy">{this.state.questions[0]} <b>{this.state.q1Answer}</b>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      <Form.Field>
        <Grid>
          <Grid.Row>
            <Grid.Column>
            {this.state.allAnswerData.slice(0,4).map(answer => <List.Item><Radio
              label={answer.value}
              name='radioGroup1'
              type="radio"
              q1answer={answer.value}
              q1answertype={answer.question_type}
              checked={this.state.q1Answer === answer.value}
              onChange={this.handleq1Change}
            /></List.Item>)}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form.Field>

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Form.Field id="run">{this.state.questions[1]} <b>{this.state.q2Answer}</b>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      <Form.Field>
        <Grid>
          <Grid.Row>
            <Grid.Column>
      {this.state.allAnswerData.slice(4,8).map(answer => <List.Item><Radio
        label={answer.value}
        name='radioGroup2'
        type="radio"
        q2answer={answer.value}
        q2answertype={answer.question_type}
        checked={this.state.q2Answer === answer.value}
        onChange={this.handleq2Change}
      /></List.Item>)}
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Form.Field>

      <Grid>
        <Grid.Row>
          <Grid.Column>
    <Form.Field id="hungry">{this.state.questions[2]} <b>{this.state.q3Answer}</b></Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    <Form.Field>
       <Grid>
         <Grid.Row>
           <Grid.Column>
    {this.state.allAnswerData.slice(8,12).map(answer => <List.Item><Radio
      label={answer.value}
      name='radioGroup3'
      type="radio"
      q3answer={answer.value}
      q3answertype={answer.question_type}
      checked={this.state.q3Answer === answer.value}
      onChange={this.handleq3Change}
    /></List.Item>)}
         </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form.Field>

      <Grid>
        <Grid.Row>
          <Grid.Column>
    <Form.Field id="mom">{this.state.questions[3]} <b>{this.state.q4Answer}</b></Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    <Form.Field>
      <Grid>
        <Grid.Row>
          <Grid.Column>
    {this.state.allAnswerData.slice(12,16).map(answer => <List.Item><Radio
      label={answer.value}
      name='radioGroup4'
      type="radio"
      q4answer={answer.value}
      q4answertype={answer.question_type}
      checked={this.state.q4Answer === answer.value}
      onChange={this.handleq4Change}
    /></List.Item>)}
         </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form.Field>

      <Grid>
        <Grid.Row>
          <Grid.Column>
    <Form.Field id="rested">{this.state.questions[4]} <b>{this.state.q5Answer}</b></Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    <Form.Field>
      <Grid>
        <Grid.Row>
          <Grid.Column>
    {this.state.allAnswerData.slice(16,20).map(answer => <List.Item><Radio
      label={answer.value}
      name='radioGroup5'
      type="radio"
      q5answer={answer.value}
      q5answertype={answer.question_type}
      checked={this.state.q5Answer === answer.value}
      onChange={this.handleq5Change}
    /></List.Item>)}
         </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form.Field>

      <Grid>
        <Grid.Row>
          <Grid.Column>
    <Form.Field id="complexion">{this.state.questions[5]} <b>{this.state.q6Answer}</b></Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    <Form.Field>
       <Grid>
         <Grid.Row>
           <Grid.Column>
    {this.state.allAnswerData.slice(20,24).map(answer => <List.Item><Radio
      label={answer.value}
      name='radioGroup6'
      type="radio"
      q6answer={answer.value}
      q6answertype={answer.question_type}
      checked={this.state.q6Answer === answer.value}
      onChange={this.handleq6Change}
    /></List.Item>)}
         </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form.Field>

      <Grid>
        <Grid.Row>
          <Grid.Column>
    <Form.Field id="walk">{this.state.questions[6]} <b>{this.state.q7Answer}</b></Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    <Form.Field>
      <Grid>
        <Grid.Row>
          <Grid.Column>
    {this.state.allAnswerData.slice(24,28).map(answer => <List.Item><Radio
      label={answer.value}
      name='radioGroup7'
      type="radio"
      q7answer={answer.value}
      q7answertype={answer.question_type}
      checked={this.state.q7Answer === answer.value}
      onChange={this.handleq7Change}
    /></List.Item>)}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form.Field>

      <Grid>
        <Grid.Row>
          <Grid.Column>
    <Form.Field id="communication">{this.state.questions[7]} <b>{this.state.q8Answer}</b></Form.Field>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    <Form.Field>
      <Grid>
        <Grid.Row>
          <Grid.Column>
    {this.state.allAnswerData.slice(28,32).map(answer => <List.Item><Radio
      label={answer.value}
      name='radioGroup8'
      type="radio"
      q8answer={answer.value}
      q8answertype={answer.question_type}
      checked={this.state.q8Answer === answer.value}
      onChange={this.handleq8Change}
    /></List.Item>)}
         </Grid.Column>
        </Grid.Row>
      </Grid>
  </Form.Field>
<Button positive onClick={(e) => this.props.handleQuizForm(e, this.state.zombieScore, this.props)} id="button-submit" >Submit</Button>
  </Form> */}
  </div>
    )
  }
}

export default Quiz