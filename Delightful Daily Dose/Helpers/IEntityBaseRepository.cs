using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Delightful_Daily_Dose.Models.Entities;

namespace Delightful_Daily_Dose.Helpers
{
    public interface IEntityBaseRepository<T> where T : class, IEntityBase, new()
    {
        
        IEnumerable<T> GetAll();
        T GetSingle(string id);
        T GetSingle(Expression<Func<T, bool>> predicate);
        T GetSingle(
            Expression<Func<T, bool>> predicate,
            params Expression<Func<T, object>>[] includeProperties
        );
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        void DeleteWhere(Expression<Func<T, bool>> predicate);
        void Commit();
    }
}
