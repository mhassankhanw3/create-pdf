<ul>
  {Object.map((propKey) => {
    <li key={propKey}>
      {this.props.data[propKey]}

      <ul>
        {Object.map((childPropKey) => {
          <li key={childPropKey}>{this.props.data[propKey][childPropKey]}</li>;
        })}
      </ul>
    </li>;
  })}
</ul>;
