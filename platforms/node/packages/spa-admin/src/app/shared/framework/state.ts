export type ActionTypes = "IDLE" | "OK" | "ERROR";

export interface Value<D> {
  data: D;
  idle: boolean;
  error: boolean;
  ok: boolean;
  type: ActionTypes;
}

export type StateTransition<D> = (data: D) => Stateable<D> | never;

export interface Stateable<D> extends Value<D> {
  value: Value<D>;
  Idle: StateTransition<D>;
  Ok: StateTransition<D>;
  Error: StateTransition<D>;
}

abstract class StateMachine<D> {
  get value(): Value<D> {
    const { type, idle, ok, error, data } = this;

    return {
      type,
      idle,
      ok,
      error,
      data,
    };
  }

  constructor(
    public type: ActionTypes,
    public idle: boolean,
    public ok: boolean,
    public error: boolean,
    public data: D
  ) {}

  abstract Idle(data: D): Stateable<D> | never;
  abstract Ok(data: D): Stateable<D> | never;
  abstract Error(data: D): Stateable<D> | never;

  protected _throw = (): never => {
    throw "Invalid operation";
  };
}

class OkState<D> extends StateMachine<D> {
  constructor(data: D) {
    super("OK", false, true, false, data);
  }

  Idle = (data: D): Stateable<D> => new IdleState(data);
  Ok = this._throw;
  Error = this._throw;
}

class ErrorState<D> extends StateMachine<D> {
  constructor(data: D) {
    super("ERROR", false, false, true, data);
  }

  Idle = (data: D): IdleState<D> => new IdleState(data);
  Ok = this._throw;
  Error = this._throw;
}

class IdleState<D> extends StateMachine<D> {
  constructor(data: D) {
    super("IDLE", true, false, false, data);
  }

  Ok = (data: D): Stateable<D> => new OkState(data);
  Error = (data: D): Stateable<D> => new ErrorState(data);
  Idle = (data: D): Stateable<D> => new IdleState(data);
}

export const Idle = <D>(data: D): Stateable<D> => new IdleState(data);
export const Ok = <D>(data: D): Stateable<D> => new OkState(data);
export const Error = <D>(data: D): Stateable<D> => new ErrorState(data);
