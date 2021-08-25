import OptionsInterface from '../interfaces/options.interface'

export default class ObjectService {
  static merge(
    target: OptionsInterface,
    source: OptionsInterface,
  ): OptionsInterface {
    return {
      ...source,
      ...target,
    } as OptionsInterface
  }
}
