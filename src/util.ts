const baseType = (parame:any) => {
  return  Object.prototype.toString.call(parame)
}

const intersection = (arrOne: Array<unknown>, arrTwo: Array<unknown>):Array<unknown> => {
  // 其中一个不是数组就是假的
  if(!Array.isArray(arrOne) || !Array.isArray(arrTwo)){
   
    return []
  }
  const two = new Set(arrTwo);
  const newArray = new Set([...new Set(arrOne)].filter(x => two.has(x)))
  return [...newArray]
}

export function isFunction (parame:any) {
  return baseType(parame) === "[object Function]"
}

export function isObject (parame:any) {
  return baseType(parame) === "[object Object]"
}

export function isUndefined (parame:any) {
  return baseType(parame) === "[object Undefined]"
}

/**
 * 判断字段值与绑定值是否相等
 * @param fieldvalue 字段值
 * @param bindValue 绑定值
 */
export function FieldContrast (
  fieldvalue: string|Array<unknown>,
  bindValue: string|Array<unknown>,
): boolean {

  /**
   * 当字段值为数组当情况下判断
   */
  if(Array.isArray(fieldvalue) && !Array.isArray(bindValue)){
    if(fieldvalue.indexOf(bindValue) >= 0){
      return true
    }
  }

  /**
   * 当绑定当值是数组的情况下判断
   */
  if(Array.isArray(bindValue) && !Array.isArray(fieldvalue)){
    if(bindValue.indexOf(fieldvalue) >= 0){
      return true
    }
  }
  
  /**
   * 如果两个都是数组
   */
  if(Array.isArray(bindValue) && Array.isArray(fieldvalue)){
    if(intersection(bindValue, fieldvalue).length > 0){
      return true
    }
  }

  /**
   * 直接判断两个值是否相等
   */
  if(fieldvalue === bindValue){
    return true;
  }
  return false;
}

/**
 * 判断模式以及值是否相等
 * @param fieldvalue 
 * @param bindValue 
 * @param mode
 */
export function IsBindContrast (
  fieldvalue: string | string[],
  bindValue: string | string[],
  mode: string
):boolean {
  /**
   * 此模式值一定要完成相等才成立
   */
  if(mode === 'equal'){
    let field = fieldvalue;
    let bind = bindValue

    if(Array.isArray(field)){
      field = field.sort()
    }
    
    if(Array.isArray(bind)){
      bind = bind.sort()
    }

    // 过滤undefined
    if(isUndefined(field) || isUndefined(bind)){
      return false
    }
    
    return field.toString() === bind.toString()
  }

  const isbind = FieldContrast(fieldvalue, bindValue)
  /**
   * 反向判断
   * 当值不等于当情况成立
   */
  // isequal
  if(mode === 'no'){
    return !isbind
  }
  return isbind
}
