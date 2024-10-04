/**
 * this decorator takes a json file/ object of resource key and 
 * provide in props for all the component where it applies
 */
//Different types for different kind of decoretors 
// declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// declare type ParameterDecorator = (target: Object, propertyKey: string | symbol | undefined, parameterIndex: number) => void;


function resource(resources:any){
   return function (target:any, propertyKey:string, descriptor:TypedPropertyDescriptor<any>){
    descriptor.value = resources;
   }
}
export {resource};