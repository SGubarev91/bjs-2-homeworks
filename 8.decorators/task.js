//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    
function wrapper(...args) {
    const hash = md5(JSON.stringify(args));

    let objectInCache = cache.find(item => item.hash === hash);

    if (objectInCache) {
        console.log("Из кеша: " + objectInCache.value, cache);
        return "Из кеша: " + objectInCache.value;
        }
        let result = func(...args);

        cache.push({ hash: hash, value: result});

        if (cache.length > 5) {
            cache.shift();
    }
        
    console.log("Вычисляем: " + result.cache);
    return "Вычисляем: " + result;
    }
    
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;

    wrapper.count = 0;
    wrapper.allCount = 0;

    function wrapper(...args) {

        wrapper.allCount++;

        if (timeoutId) {
        console.log('уже есть таймаут - сигнал не отправлен, мало времени', args);
        clearTimeout(timeoutId);
        }

        if (wrapper.allCount === 1) {
        console.log('первый сигнал', args);

        func.call(this, ...args);
        wrapper.count++;
        }

        timeoutId = setTimeout(() => {
        console.log('задержка больше 2000 млсек, сработал таймаут');

        func.apply(this, args);

        clearTimeout(timeoutId);
        timeoutId = null;

        wrapper.count++;
        }, delay);

    } return wrapper;
}
